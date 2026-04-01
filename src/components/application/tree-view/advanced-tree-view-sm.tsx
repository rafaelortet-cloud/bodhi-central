import { Attachment01, File04, Folder } from "@untitledui/icons";
import { Collection, useTreeData } from "react-aria-components";
import { TreeView } from "@/components/application/tree-view/tree-view";

export interface TreeItemData {
    id: string;
    name: string;
    icon?: any;
    children?: TreeItemData[];
}

const AdvancedTree = ({ size }: { size: "sm" | "md" }) => {
    const tree = useTreeData<TreeItemData>({ initialItems, getChildren: (item) => item.children ?? [] });

    return (
        <TreeView
            size={size}
            selectionMode="multiple"
            showConnectors
            draggable
            aria-label="Organization"
            items={tree.items}
            defaultExpandedKeys={["org", "design", "projects", "powersurge", "client-brief"]}
            defaultSelectedKeys={["sienna", "ammar", "caitlyn", "assets", "eng-root"]}
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
            {(item: (typeof tree.items)[number]) => (
                <TreeView.Item id={item.key} textValue={item.value.name}>
                    <TreeView.ItemContent icon={item.value.icon}>{item.value.name}</TreeView.ItemContent>
                    <Collection items={item.children ?? []}>
                        {(child) => (
                            <TreeView.Item id={child.key} textValue={child.value.name}>
                                <TreeView.ItemContent icon={child.value.icon}>{child.value.name}</TreeView.ItemContent>
                                <Collection items={child.children ?? []}>
                                    {(grandchild) => (
                                        <TreeView.Item id={grandchild.key} textValue={grandchild.value.name}>
                                            <TreeView.ItemContent icon={grandchild.value.icon}>{grandchild.value.name}</TreeView.ItemContent>
                                            <Collection items={grandchild.children ?? []}>
                                                {(greatGrandchild) => (
                                                    <TreeView.Item id={greatGrandchild.key} textValue={greatGrandchild.value.name}>
                                                        <TreeView.ItemContent icon={greatGrandchild.value.icon}>
                                                            {greatGrandchild.value.name}
                                                        </TreeView.ItemContent>
                                                    </TreeView.Item>
                                                )}
                                            </Collection>
                                        </TreeView.Item>
                                    )}
                                </Collection>
                            </TreeView.Item>
                        )}
                    </Collection>
                </TreeView.Item>
            )}
        </TreeView>
    );
};

const initialItems: TreeItemData[] = [
    {
        id: "org",
        name: "Organization",
        icon: Folder,
        children: [
            { id: "eng", name: "Engineering", icon: Folder, children: [] },
            {
                id: "design",
                name: "Design",
                icon: Folder,
                children: [
                    { id: "sienna", name: "Sienna Hewitt", children: [] },
                    { id: "ammar", name: "Ammar Foley", children: [] },
                    { id: "caitlyn", name: "Caitlyn King", children: [] },
                ],
            },
            { id: "product", name: "Product", icon: Folder, children: [] },
            { id: "marketing", name: "Marketing", icon: Folder, children: [] },
            { id: "sales", name: "Sales", icon: Folder, children: [] },
            { id: "cs", name: "Customer Success", icon: Folder, children: [] },
            { id: "ops", name: "Operations", icon: Folder, children: [] },
            { id: "finance", name: "Finance", icon: Folder, children: [] },
        ],
    },
    {
        id: "projects",
        name: "Projects",
        icon: Folder,
        children: [
            {
                id: "powersurge",
                name: "Powersurge",
                icon: Folder,
                children: [
                    {
                        id: "client-brief",
                        name: "Client brief",
                        icon: Folder,
                        children: [
                            { id: "brief-v1", name: "Brief_v1", icon: File04, children: [] },
                            { id: "brief-v2", name: "Brief_v2", icon: File04, children: [] },
                        ],
                    },
                    { id: "deliverables", name: "Deliverables", icon: File04, children: [] },
                    { id: "assets", name: "assets.zip", icon: Attachment01, children: [] },
                ],
            },
            { id: "ikigai", name: "Ikigai Labs", icon: Folder, children: [] },
            { id: "lightspeed", name: "Lightspeed", icon: Folder, children: [] },
            { id: "voxel", name: "Voxel Labs", icon: Folder, children: [] },
        ],
    },
    { id: "eng-root", name: "Engineering", icon: Folder, children: [] },
    { id: "marketing-root", name: "Marketing", icon: Folder, children: [] },
    { id: "customer-data", name: "Customer data", icon: Folder, children: [] },
    { id: "settings", name: "Settings", icon: Folder, children: [] },
];

export const AdvancedSmDemo = () => <AdvancedTree size="sm" />;