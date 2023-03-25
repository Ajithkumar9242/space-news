// import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, SimpleGrid, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import { Card, CardBody, Divider, Flex, Heading, Image, SimpleGrid, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import  { React, useEffect, useState } from 'react'
import "./App.css";
import { Fade } from "react-awesome-reveal";
// import { Text } from '@chakra-ui/react'

const App = () => {

  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
    .then((response) =>
      response.json()
    )
    .then((data) =>{
      setNewsList(data)
    })
  
    
  }, [])
  


  return (
    <Fade>
      <div className="title">
        <Heading color={"white"} as='h2' size='3xl' textAlign={'center'}>Space News</Heading>
        <br />
      </div>
      <SimpleGrid columns={[1, 2, 3]} spacing={5}>
        
        {
          newsList.map((val , key) =>{


            return <Card key={key} maxW="lg" >


              <CardBody>


              <Image src={val.imageUrl} alt="Images of articles"  borderRadius='lg' cursor={'pointer'} onClick={() => {window.location.href = val.url}}/>


              <Stack mt='6' spacing='3'>


              <Heading as='h3' size='lg'>  { val.title }</Heading>


              <Text>{ val.summary }</Text>


              <Text as='h4' size='md'>{ val.publishedAt }</Text>


              <Divider />
              
              </Stack>
              </CardBody>
            </Card>
           
          })
        }
        
      </SimpleGrid>
      


    </Fade>
  )
}

export default App