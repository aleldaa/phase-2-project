import Giveaways from './Giveaways'

function GiveawayList({ giveaways }){

    const giveawayList = giveaways.map((giveaway)=>{
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
        <div className='giveaway-container'>
            <h2>Some fun Giveaways!</h2>
            <div className='giveaway-list'>
                {giveawayList}
            </div>
        </div>
    )
}

export default GiveawayList