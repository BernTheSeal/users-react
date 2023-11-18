import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Detail = ({data}) => {
    const {id} = useParams()
    const [selectedData, setSelectedData] = useState(null)

    useEffect(() => {
        const foundData = data.find(dt => dt.id == id)
        setSelectedData(foundData || null)
    }, [data, id])

    const style = {
        pTagStyle: {
            display:'flex', 
            justifyContent:'space-between', 
            marginTop: 20, 
            fontSize:20, 
            fontWeight:300
        },
        divTagStyle: {
            width:'700px', 
            margin: 'auto', 
            marginTop:150, 
            padding:50, 
            backgroundColor: 'rgb(252,252,252)' ,
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' 
        }
    }

    

 

    return (
        <>
            {selectedData ? (
                <div style={style.divTagStyle}>
                    <p style={{fontWeight:400, fontSize:35}}>
                        {selectedData.name}
                    </p>
                    <p style={style.pTagStyle}>
                        <span> username </span> <span> {selectedData.username} </span> 
                    </p>
                    <p style={style.pTagStyle}>
                        <span> e-mail </span> <span> {selectedData.email} </span> 
                    </p>
                    <p style={style.pTagStyle}>
                        <span> address </span> <span> {selectedData.address.city}, {selectedData.address.street} </span> 
                    </p>
                    <p style={style.pTagStyle}>
                        <span> phone </span> <span> {selectedData.phone} </span> 
                    </p>
                    <p style={style.pTagStyle}>
                        <span> website </span> <span> {selectedData.website} </span> 
                    </p>
                    <p style={style.pTagStyle}>
                        <span> company </span> <span> {selectedData.company.name} </span> 
                    </p>
                </div>
            ): (<div></div>)}
        </>
    )
}

export default Detail