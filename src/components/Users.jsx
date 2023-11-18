import { useNavigate } from "react-router-dom";

const Users = ({data}) => {
    const navigate = useNavigate()

    const liTagStyle = {
        padding:15,
        borderBottom:'1px solid rgba(0,0,0, 0.2)', 
        display:'flex', 
        justifyContent:'space-between',
        fontWeight: 300
    }

    return (
        <>
            <h2 style={{margin: 'auto', width:'500px', marginTop: 20, fontSize:35, padding:20}}>users</h2>
            <ul style={{listStyle: 'none', width:'500px', margin: 'auto'}}>
                {data.map((data, i) => (
                    <li style={liTagStyle} key={data.id}> 
                        {i+1}- {data.name}
                        <i 
                            onClick={() => navigate(`detail/${data.id}`)}
                            style={{
                                cursor:'pointer', 
                                padding:3, 
                                color: 'gray',
                            }}
                            class="fa-solid fa-caret-right">
                        </i>
                    </li>
                ))}
            </ul>
        </> 
    )
}

export default Users;