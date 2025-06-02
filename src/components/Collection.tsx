type Props = {
    image: any
    imageAlt: string
}

export default function Collection({ image, imageAlt }: Props) {
    return (
        <div className="collection-container">
            <div className="info-container">
                <h1>Ready for autumn collection</h1>
                <p>Treat yourself to some of our brand new autumn collection - all with the wonderful colours surrounding you.</p>
                <button>PURCHASE NOW</button>
            </div>

            <img 
                src={image} 
                alt={imageAlt} 
            />
        </div>
    )
}