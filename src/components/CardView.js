import  React,{useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cards from './Cards'
import Container from '@mui/material/Container'
import i18n from '../i18n';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    const [items, setItems] = useState([]);
   
    useEffect(() => {
        fetch("https://www.mecallapi.com/api/th/attractions")
          .then(res => res.json())
          .then(
            (result) => {
             
              setItems(result);
            },
            
            (error) => {
              console.log(error);
            }
          )
      }, [])
  return (
    <Container maxWidth="lg" style={{paddingTop:"1em"}}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {items.map(items=>(
        <Grid key={items.id} item lg={4} xs={12}>
          <Cards items={items}/>
        </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
}
