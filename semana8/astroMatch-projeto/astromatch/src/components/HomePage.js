import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import MatchesPage from './MatchesPage';

const Container = styled.div`
    display: flex;
    position: absolute;
    width: 1440px;
    height: 1024px;
    left: 0;
    top: 0;
    background-color: #c4c4c4;
    `
    const DivApp = styled.div`
        diplay: flex;
        position: absolute;
        width: 416px;
        height: 617px;
        left: 512px;
        top: 203px;
        background-color: white;
        border-radius: 34px;
    `
    const Header = styled.header`
        border-bottom: 1px solid black;
        height: 60px;
    `
    
    const DivInfo = styled.section`
        position: absolute;
        width: 343px;
        height: 450px;
        left: -515px;
        top: -200px;
        background-color: #C4C4C4;
        border-radius: 31px;  
    `
    const Image = styled.img`
        position: absolute;
        width: 343px;
        height: 352px;
        left: 0px;
        top: 0px;
    `
    const DivImage = styled.div`
        position: absolute;
        width: 343px;
        height: 470px;
        left: 550px;
        top: 275px;
        background: #C4C4C4;
        border-radius: 31px;
    `
    const DivText = styled.div`
        position: absolute;
        width: 334px;
        height: 60px;
        left: 559px;
        top: 610px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 20px;
        color: #000000;
    `
    const ButtonLike = styled.button`
        position: absolute;
        width: 50px;
        height: 50px;
        left: 250px;
        top: 550px;
    `
    const ButtonDeslike = styled.button`
        position: absolute;
        width: 50px;
        height: 50px;
        left: 100px;
        top: 550px;
    `
    const ButtonMatchs = styled.button`
        position: absolute;
        width: 60px;
        height: 40px;
        left: 340px;
        top: 15px;
        
    `
    const Logo = styled.h3`
        position: absolute;
        left: 100px;
        top: -20px;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 38px;
        text-align: center;
        color: black;
    `


const HomePage = () => {
    
    
    
    const [profile, setProfile] = useState({
      id: "",
      photo: "",
      name: "",
      bio: "",
      age: 0
    })
    
    useEffect(() => {
      getProfile()
    }, [])
  
    const getProfile = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thiago/person")
        .then((response) => {
          setProfile(response.data.profile)
        })
        .catch(err => {
          console.log(err)
        })
    }

    

    const chossePerson = (chosse) => {
        const body = {
            id: (profile.id),
            choice: chosse
    }
        axios
        .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thiago/choose-person", body)
        .then(() => {
            getProfile()
        })
        .catch(err => {
            console.log(err)
        })

    }
    
    const handleLikeprofile = () => {
        chossePerson(true)
    }
    const handleDeslikeProfile = () => {
        getProfile()
    }

    
    return (
        <Container>
            <DivApp>
                <Header>
                    <Logo>astroMATCH</Logo>
                    <ButtonMatchs>
                        matchs
                    </ButtonMatchs>
                </Header>
                <DivInfo>
                    <DivImage>
                        <Image src={profile.photo} />
                    </DivImage>
                    <DivText>
                        <p>{profile.name}, {profile.age}</p>
                        <p>{profile.bio}</p>
                    </DivText>
                </DivInfo>
                <footer>
                    <ButtonDeslike onClick={handleDeslikeProfile}>X</ButtonDeslike>
                    <ButtonLike onClick={handleLikeprofile}>like</ButtonLike>
                </footer>
            </DivApp>
        </Container>
    )
}
export default HomePage