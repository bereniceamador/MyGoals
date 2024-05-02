import {StyleSheet, View, Text, Pressable }from "react-native";

 function GoalItem({itemData, OnDeleteItem}){
    return(
        <Pressable>
            <View Style={styles.goalItem}>
            <Text style={StyleSheet.goalText}>{itemData.item}</Text>
            </View>
        </Pressable>
    )
 }

 export default GoalItem
 const styles=StyleSheet.create({
    goalItem:{
        margin:8,
        padding: 6 ,
        borderRadius: 6 ,
        backgroundColor:'#8576FF',
        color:'white'
    },
    goalText:{
        color:'white'
    }
 })