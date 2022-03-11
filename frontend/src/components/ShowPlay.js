

export const ShowPlay =({Playlist})=>{
    console.log(Playlist,"scsc")
    return(
        <div>
           
           {Playlist.map(items=>
             <div key={items.id}>{items.name}</div>
            )}
        </div>
    )
}