import ColorItem from "./color-item";

export interface ColorChartProps {
    data: object;
}

export default function ColorChart({ data }: ColorChartProps) {
    return (
        <>
            <div className="flex flex-col gap-4 p-8">
                {Object.values(data).map((value, index) => {
                    return <ColorItem key={index} isBase={value.isBase} Hexa={value.hexa} Name={value.name} Rgb={value.rgb} Hsl={value.hsl} />
                })}
            </div>
        </>
    );
}
