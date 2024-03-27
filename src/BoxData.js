import { Box, Typography } from "@mui/material"


export default function BoxData({title, desc, link}) {

    const newText = desc.slice(0, 250)


    return (
        <Box sx={{width: '70vw', 
        height:'25vh', 
        alignItems: 'center', 
        justifyContent:'center',
        display:'flex',
        marginY:'1%',
        borderRadius:'20px',
        backgroundColor:'white'
        }}>
            
                    <Box sx={{width: '30%',
                            height:'80%',
                            backgroundColor:'white',
                            borderTopLeftRadius:'20px',
                            borderBottomLeftRadius:'20px',
                            borderRight:'2px solid grey',
                            paddingRight:'1%',
                            paddingLeft:'1%',
                            alignItems:"center",
                            justifyContent:'center',
                            display:'flex',
                            flexDirection:'column'
                            }}>
                                <h4 style={{textAlign:'center', fontPalette:'dark'}}>
                                    {title}
                                </h4>
                        
                    </Box>
                    <Box sx={{width: '70%',
                            height:'100%',
                            backgroundColor:'white',
                            overflowY:'auto',
                            alignItems: 'flex-start',
                            justifyContent:'center', 
                            display:'flex',
                            flexDirection:'column',
                            borderTopRightRadius:'20px',
                            borderBottomRightRadius:'20px'
                            }}>
                                <Box sx={{display:'flex', flexDirection:'column', marginLeft:'2%', marginRight:'2%'}}>
                                    <Typography variant="body1" style={{ textAlign: 'left' }}>
                                        {newText}
                                    </Typography>
                                    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textAlign: 'left', fontSize:'15px' }}>
                                        Link to GitHub Repo
                                    </a>
                                </Box>
                                
            
                                
                                
                    </Box>

            

        </Box>
    )
}