import { View, Text, Image } from 'react-native'
import React from 'react'


export const PlanetCard = (props) => {
    const { planetName, planetDescription, planetImage } = props
    return (
        <View>
            <View 
                style={{ 
                    borderColor: 'green', 
                    borderWidth: 1, 
                    borderRadius: 20,
                    padding: 16,
                    margin: 16,
                    backgroundColor:'wheat',
                    flexDirection: 'row'
                }}
            >
                <Image 
                    style={{
                        width: 100,
                        height: 100
                    }}
                    source={planetImage}
                />
                <View
                    style={{
                        flex: 1,
                        marginLeft: 8,
                        marginRight: 8,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{planetName}</Text>
                    <Text>{planetDescription}</Text>


                </View>
            
            </View>
        </View>
    )
}

// export default PlanetComponent