import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import { SearchBar } from "react-native-elements/dist/searchbar/SearchBar";
import { Card } from "react-native-elements";

export default function App() {

    return (
        <View style={styles.container}>

            <View>

                <View style={styles.header}>

                    <View style={styles.headerLeft}>
                        <Image style={styles.headerDeliveryMan} source={require('./assets/delivery-man.png')}/>
                        <Text style={{color: 'white'}}>  Lieu sélectionné </Text>
                        <Image style={styles.headerArrow} source={require('./assets/arrow-down.png')}/>
                    </View>
                    <View>
                        <Image style={styles.headerProfile} source={require('./assets/profile.png')}/>
                    </View>

                </View>
                <SearchBar placeholder="Plats, desserts, ..." lightTheme containerStyle={{ paddingBottom: 0, backgroundColor: 'transparent', borderTopColor: 'transparent', borderBottomColor: 'transparent', shadowColor: "#000", shadowOffset: { width: 0, height: 7, }, shadowOpacity: 0.41, shadowRadius: 9.11, elevation: 14,}} inputContainerStyle={{borderRadius: 100, backgroundColor: 'white'}} color='black'/>

            </View>

            <ScrollView>

                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom: 10}}>
                        <Card containerStyle={styles.categoryCard}>
                            <ImageBackground source={require('./assets/burger.jpg')} style={styles.categoryImg} resizeMode="cover">
                                <Text style={styles.categoryText}>Burgers</Text>
                            </ImageBackground>
                        </Card>
                        <Card containerStyle={styles.categoryCard}>
                            <ImageBackground source={require('./assets/pizza.png')} style={styles.categoryImg} resizeMode="cover">
                                <Text style={styles.categoryText}>Pizzas</Text>
                            </ImageBackground>
                        </Card>
                        <Card containerStyle={styles.categoryCard}>
                            <ImageBackground source={require('./assets/sushi.jpg')} style={styles.categoryImg} resizeMode="cover">
                                <Text style={styles.categoryText}>Sushis</Text>
                            </ImageBackground>
                        </Card>
                        <Card containerStyle={styles.categoryCard}>
                            <ImageBackground source={require('./assets/gateau.jpg')} style={styles.categoryImg} resizeMode="cover">
                                <Text style={styles.categoryText}>Gâteaux</Text>
                            </ImageBackground>
                        </Card>
                        <Card containerStyle={styles.categoryCard}>
                            <ImageBackground source={require('./assets/tacos.jpg')} style={styles.categoryImg} resizeMode="cover">
                                <Text style={styles.categoryText}>Tacos</Text>
                            </ImageBackground>
                        </Card>
                        <Card containerStyle={styles.categoryCard}>
                            <ImageBackground source={require('./assets/sandwich.jpg')} style={styles.categoryImg} resizeMode="cover">
                                <Text style={styles.categoryText}>Sandwich</Text>
                            </ImageBackground>
                        </Card>

                    </ScrollView>
                </View>

                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Card containerStyle={styles.promotionCard}>
                            <ImageBackground source={require('./assets/promo1.png')} style={styles.promotionImg} resizeMode="cover"/>
                        </Card>
                        <Card containerStyle={styles.promotionCard}>
                            <ImageBackground source={require('./assets/promo2.png')} style={styles.promotionImg} resizeMode="cover"/>
                        </Card>
                        <Card containerStyle={styles.promotionCard}>
                            <ImageBackground source={require('./assets/promo3.png')} style={styles.promotionImg} resizeMode="cover"/>
                        </Card>
                        <Card containerStyle={styles.promotionCard}>
                            <ImageBackground source={require('./assets/promo4.png')} style={styles.promotionImg} resizeMode="cover"/>
                        </Card>
                        <Card containerStyle={styles.promotionCard}>
                            <ImageBackground source={require('./assets/promo5.png')} style={styles.promotionImg} resizeMode="cover"/>
                        </Card>
                        <Card containerStyle={styles.promotionCard} style={{marginRight: 10}}>
                            <ImageBackground source={require('./assets/promo6.png')} style={styles.promotionImg} resizeMode="cover"/>
                        </Card>
                    </ScrollView>
                </View>

            </ScrollView>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ecf0f1',
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#00c2b3',
        paddingTop: 50,
        marginBottom: -35
    },
    headerDeliveryMan: {
        width:30,
        height: 30
    },
    headerLeft: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        paddingBottom: 30
    },
    headerArrow: {
        width:10,
        height: 10
    },
    headerProfile: {
        width:30,
        height: 30
    },
    searchBar: {
        marginTop: 10,
        backgroundColor: '#C2C2C2',
    },
    categoryCard: {
        borderRadius: 10,
        width: 80,
        height: 80,
        borderWidth: 0,
        padding: 0,
        margin: 4,
        marginTop: 10,
    },
    categoryImg: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: "column",
        justifyContent: 'flex-end',
    },
    categoryText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 5,
        paddingBottom: 5
    },
    promotionCard: {
        borderRadius: 10,
        width: 350,
        height: 180,
        borderWidth: 0,
        padding: 0,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    promotionImg: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: "column",
        justifyContent: 'flex-end',
    }



});
