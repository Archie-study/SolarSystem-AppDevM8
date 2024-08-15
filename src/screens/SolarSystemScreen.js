import React from 'react'
import { 
    View, 
    Text, 
    ImageBackground, 
    Image, 
    ScrollView, 
    TouchableOpacity 
} from 'react-native'
import { PlanetCard } from '../components/PlanetComponent'

const SolarSystemScreen = () => {
  const planetAlert = (planet) => {
    if(planet === 'mercury'){
      alert('You clicked mercury!')
    }
    else if(planet === 'venus'){
      alert('You clicked venus!')
    }
    else if(planet === 'earth'){
      alert('You clicked earth!')
    }
    else if(planet === 'mars'){
      alert('You clicked mars!')
    }
    else if(planet === 'jupiter'){
      alert('You clicked jupiter!')
    }
    else if(planet === 'saturn'){
      alert('You clicked saturn!')
    }
    else if(planet === 'uranus'){
      alert('You clicked uranus!')
    }
    else if(planet === 'neptune'){
      alert('You clicked neptune!')
    }
  }
  return (
    <View style={{ backgroundColor: 'skyblue', flex: 1}}>
        {/* TITLE */}
        <View style={{ padding: 16, alignItems: 'center'}}>
            <Text style={{fontSize: 30, fontFamily:'serif', textDecorationLine:'underline'}}>Solar System</Text>
        </View>

        <ScrollView>
          <TouchableOpacity onPress={() => planetAlert('mercury')}>
            <PlanetCard 
                planetName="Mercury"
                planetDescription="Mercury is the fastest planet, zipping around the sun every 88 earth days."
                planetImage={require('../../assets/images/mercury.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => planetAlert('venus')}>
            <PlanetCard 
                planetName="Venus"
                planetDescription="Venus spins slowly in the opposite direction from most planets"
                planetImage={require('../../assets/images/venus.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => planetAlert('earth')}>
            <PlanetCard 
                planetName="Earth"
                planetDescription="Earth is the only place we know of so far that's inhabited by living things"
                planetImage={require('../../assets/images/earth.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => planetAlert('mars')}>
            <PlanetCard 
                planetName="Mars"
                planetDescription="Mars is a dusty, cold, desert world with a very thin atmosphere"
                planetImage={require('../../assets/images/mars.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => planetAlert('jupiter')}>
            <PlanetCard 
                planetName="Jupiter"
                planetDescription="Jupiter is more than twice as massive than the other planets of our solar system combined/"
                planetImage={require('../../assets/images/jupiter.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => planetAlert('saturn')}>
            <PlanetCard 
                planetName="Saturn"
                planetDescription="Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system"
                planetImage={require('../../assets/images/saturn.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => planetAlert('uranus')}>
            <PlanetCard 
                planetName="Uranus"
                planetDescription="Uranus rotates at nearly 90-degree angle from the plane of its orbit"
                planetImage={require('../../assets/images/uranus.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => planetAlert('neptune')}>
            <PlanetCard 
                planetName="Neptune"
                planetDescription="Neptune is dark, cold, and whipped by supersonic winds."
                planetImage={require('../../assets/images/neptune.png')}
            />
          </TouchableOpacity>
        </ScrollView>
      
    </View>
  )
}

export default SolarSystemScreen