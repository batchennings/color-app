export interface ColorItemProps{
    isBase: boolean;
    Hexa: string;
    Name: string;
    Rgb: object;
    Hsl: object;
}

export default function ColorItem({isBase, Hexa, Name, Rgb, Hsl}: ColorItemProps){
    return(
        <div className="flex flex-row gap-2 items-center">
            <div className={`w-20 h-8 rounded-md ${isBase ? `underline` : null}`} style={{ backgroundColor: Hexa }}></div>
            <div className="flex flex-row gap-2">
                <p>{Hexa}</p>
                <p>- {Name}</p>
                <p>- RGB:
                {Object.values(Rgb).map((value, index) => {
                    return (<span key={index} className="pr-2">{value},</span>)
                })}
                </p>
                <p>- HSL:
                {Object.values(Hsl).map((value, index) => {
                    return (<span key={index} className="pr-2">{value},</span>)
                })}
                </p>
                {isBase ? <p className="rounded-full px-3 py-1 w-fit h-fit text-xs text-blue-600 bg-blue-100">Base</p> : null}
            </div>
        </div>
    )
}