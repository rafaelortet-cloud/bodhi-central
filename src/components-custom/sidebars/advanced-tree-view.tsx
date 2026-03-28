import { Attachment01, File04, Folder } from "@untitledui/icons";
import { Collection, useTreeData, type Selection } from "react-aria-components";
import { TreeView } from "@/components/application/tree-view/tree-view";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export interface TreeItemData {
    id: string;
    name: string;
    icon?: React.ElementType;
    href?: string;
    count?: number;
    children?: TreeItemData[];
}

interface AdvancedTreeProps {
    size: "sm" | "md";
    items?: TreeItemData[];
    onSelectionChange?: (keys: Selection) => void;
    isLoading?: boolean;
}

/**
 * A recursive tree item component that renders itself and its children.
 */
const AdvancedTreeItem = ({ item }: { item: any }) => {
    return (
        <TreeView.Item id={item.key} textValue={item.value.name} href={item.value.href}>
            <TreeView.ItemContent icon={item.value.icon} count={item.value.count}>
                {item.value.name}
            </TreeView.ItemContent>
            {item.children && (
                <Collection items={item.children}>
                    {(child) => <AdvancedTreeItem item={child} />}
                </Collection>
            )}
        </TreeView.Item>
    );
};

export const AdvancedTree = ({ size, items = initialItems, onSelectionChange, isLoading }: AdvancedTreeProps) => {
    const router = useRouter();
    const tree = useTreeData<TreeItemData>({ 
        initialItems: items, 
        getChildren: (item) => item.children ?? [] 
    });

    /**
     * Handle selection change and navigation.
     * If an item has an href, we navigate to it.
     */
    const handleSelectionChange = useCallback((keys: Selection) => {
        onSelectionChange?.(keys);
        
        // Example: If single selection and has href, navigate
        if (keys !== "all" && keys.size === 1) {
            const selectedKey = Array.from(keys)[0];
            const item = tree.getItem(selectedKey as string);
            if (item?.value.href) {
                router.push(item.value.href);
            }
        }
    }, [onSelectionChange, tree, router]);

    if (isLoading) {
        return <div className="p-4 text-sm text-fg-quaternary">Loading...</div>;
    }

    return (
        <TreeView
            size={size}
            selectionMode="multiple"
            showConnectors
            draggable
            aria-label="Tree Navigation"
            items={tree.items}
            onSelectionChange={handleSelectionChange}
            onReorder={(e) => {
                if (e.target.dropPosition === "before") {
                    tree.moveBefore(e.target.key as string, e.keys as Set<string>);
                } else if (e.target.dropPosition === "after") {
                    tree.moveAfter(e.target.key as string, e.keys as Set<string>);
                }
            }}
            onMove={(e) => {
                if (e.target.dropPosition === "on") {
                    const targetNode = tree.getItem(e.target.key as string);
                    if (targetNode) {
                        const idx = targetNode.children ? targetNode.children.length : 0;
                        for (const key of e.keys) {
                            tree.move(key as string, e.target.key as string, idx);
                        }
                    }
                }
            }}
        >
            {(item) => <AdvancedTreeItem item={item} />}
        </TreeView>
    );
};

const initialItems: TreeItemData[] = [
    {
        id: "buddhist-canon",
        name: "Buddhist Canon",
        icon: Folder,
        count: 120,
        children: [
            { 
                id: "sutra-pitaka", 
                name: "Sutra Pitaka", 
                icon: Folder, 
                count: 45,
                children: [
                    { id: "digha-nikaya", name: "Digha Nikaya", href: "/canon/sutra/digha", count: 34 },
                    { id: "majjhima-nikaya", name: "Majjhima Nikaya", href: "/canon/sutra/majjhima", count: 11 },
                ]
            },
            { 
                id: "vinaya-pitaka", 
                name: "Vinaya Pitaka", 
                icon: Folder, 
                count: 75,
                children: [] 
            },
        ],
    },
    {
        id: "projects",
        name: "Research Projects",
        icon: Folder,
        children: [
            {
                id: "translation-task",
                name: "Translation Task",
                icon: Folder,
                children: [
                    { id: "draft-v1", name: "Draft_v1", icon: File04, count: 2 },
                    { id: "resources", name: "Resources", icon: Attachment01 },
                ],
            },
        ],
    },
];

export const AdvancedSmDemo = () => <AdvancedTree size="sm" />;
export const AdvancedMdDemo = () => <AdvancedTree size="md" />;