
import { Box, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import TitleArrow from '../../../assets/images/back-arrow.svg'
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Accordion from '../../../frontend/components/common/accordion';
import { useNavigate } from 'react-router';

const CreateAgents = () => {
    const navigate = useNavigate();
   
    return (
        <Box>
            <Box className="title-with-arrow">
                <Stack direction="row" spacing={2}>
                    <IconButton aria-label="arrow" className='icon-button-arrow' onClick={() => navigate("/datastores")}>
                        <Box component={'img'} src={TitleArrow} alt="BackArrow"></Box>
                    </IconButton>
                    <Box className="page-title" component={'h1'}>Create Smart Search Agent</Box>
                </Stack>
            </Box>

            <Box className="create-data-store-wrap">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>

                        <Grid size={{xs: 12, md:4}}>
                           <Box className="inputwrap">
                                <Box component="p"> Agent Name <Box component="span" className='required-sign'>*</Box></Box>
                                <TextField
                                    fullWidth
                                    id="outlined-error"
                                    placeholder="Smart Search Agent"
                                    className="input-text"
                                //   disabled
                                    variant="filled"
                                />
                            </Box>
                        </Grid>

                        <Grid size={{xs: 12, md:4}}>
                        <Box className="inputwrap">
                                <Box component="p"> Agent Description </Box>
                                <TextField
                                    fullWidth
                                    id="outlined-error"
                                    placeholder="Search for anything across data sources."
                                    className="input-text"
                                //   disabled
                                    variant="filled"
                                />
                            </Box>
                        </Grid>

                        <Grid size={12}>
                        <Box className="inputwrap">
                                <Box component="p"> System Prompt <Box component="span" className='required-sign'>*</Box> </Box>
                                <TextField
                                    fullWidth
                                    id="outlined-error"
                                    placeholder="Enter system prompt"
                                    className="input-text"
                                    multiline
                                    rows={4}
                                //   disabled
                                    variant="filled"
                                />
                            </Box>
                        </Grid>
                       
                        

                    </Grid>
                    <Box className="btn-endplacement prompt-btn">
                         <Button className='outlinebtn'>View Prompt Library</Button>
                    </Box>
                </Box>

            </Box>

            <Box className="accordion-container">
                <Accordion></Accordion>
            </Box>


              <Stack direction={"row"} p={2} gap={"1.25rem"} className='btn-wrapper bottomfixed-btn '>
                <Button variant="outlined" className='default-outline-button'>
                    Back
                </Button>
                <Button variant="contained" className='common-button'>
                    Create
                </Button>
            </Stack>
        </Box>
    )
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
  ];

export default CreateAgents 