import React from 'react'

// we can also direct destructure it
// function Card({username="default username", channel="default username"}){ console.log(username) }

function Card(props) {
    console.log(props.username);
    // console.log("props", props);  // we add this to check only....

    return (
        <div className="w-60 flex flex-col rounded-xl bg-pink-300 min-h-[19rem] ">
            <div>
                <img
                    src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                    alt="test"
                    className="object-cover object-center rounded-t-xl"
                />
            </div>
            <div className="flex flex-col py-3 px-3 pb-10">
                <div className="flex justify-between ">
                    <h1 className="font-bold ">{props.username || "default username"}</h1>
                    <h1>Price</h1>
                </div>
                <div className="flex  justify-between">
                    <p>{props.channel || "default channel name"}</p>
                    <p>0.01</p>
                </div>
            </div>
        </div>
    )
}

export default Card