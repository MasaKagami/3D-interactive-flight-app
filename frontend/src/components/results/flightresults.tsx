const FlightResults = () => {
    
    const flightPrice = {
        cheapest: 1200,
        fastest: 2400

    }

    return(
        <div className="flex flex-col flex-1 h-full items-center bg-background">
            <div className="flex border rounded-lg">
                <div className="btn flex flex-col border bg-pink-400">
                    <label className="label-text text-start">Best</label>
                    <span>{flightPrice.cheapest}</span>
                </div>
                <div className="btn flex flex-col border bg-pink-400">
                    <label className="label-text text-start">Cheapest</label>
                    <span>{flightPrice.fastest}</span>
                </div>          
            </div>

            <h1>results</h1>
        </div>
    )
}

export default FlightResults