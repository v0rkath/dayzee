import asciiToBinary from "@/utils/ascii-to-binary";

type CategoryObject = Record<string, string[]>;
type CategoryBoxProps = {
    categories: CategoryObject,
    title: string,
}

export default function CategoryBox(props: CategoryBoxProps) {

    const binTitle = asciiToBinary(props.title);
    const fields = Object.keys(props.categories);

    const categories = fields.map((item, index) => {
        return (
            <div key={index} className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-dark-sub ml-4"></div>
                    <span className="flex-shrink mx-4">
                        {item}
                    </span>
            </div>
        )
    });
    //let i = 0;
    //const items = fields.map((item) => )

    return (
        <div className="min-w-80 flex flex-col">
            <div className="border-dark-sub border-t border-r border-l p-1 pl-2 text-dark-sub flex justify-between">
                {props.title}
                <span className="text-xs my-auto font-light pr-2">{binTitle}</span>
            </div>
            <div className="border-dark-sub border p-2 text-sm">
                {categories}
            </div>
        </div>
    )
}