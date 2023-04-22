import Giveaways from './Giveaways'

function GiveawayList({ giveaways }){

    const giveawayList = giveaways.map((giveaway)=>{
        console.log(giveaway)
        return <Giveaways 
                key={giveaway.id}
                id={giveaway.id}
                giveawayUrl={giveaway.giveaway_url}
                title={giveaway.title}
                thumbnail={giveaway.thumbnail}
                summary={giveaway.short_description}
            />
    })

    return (
        <div>
            {giveawayList}
        </div>
    )
}

export default GiveawayList