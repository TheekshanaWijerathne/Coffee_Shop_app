import { Appearance, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image,useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/Menu_Items";
import Menu_images from "@/constants/Menu_Images";


export default function MenuScreen() {
    // const colorScheme = Appearance.getColorScheme();
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme);
    

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const seperatorComp = <View style={styles.seperator}/>
    
    const footerComponent = <Text style={styles.footerComp}>End of Menu</Text>

    return (
        <Container style={{backgroundColor:theme.background}}>
            <FlatList 
                data={MENU_ITEMS} 
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle = {styles.contentContainer}
                ItemSeparatorComponent={seperatorComp}
             
                ListFooterComponent={footerComponent}
                ListEmptyComponent={<Text style={styles.Text}>No items in menu</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle,styles.menuItemText]} >{item.title}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        <Image style={styles.menuImage} source={Menu_images[item.id - 1]}  />
                    </View>
                )}
            />
        </Container>
    );
    function createStyles(theme) {
        return StyleSheet.create({
            contentContainer:{
                paddingTop:10,
                paddingBottom:20,
                paddingHorizontal:12,
                backgroundColor:theme.background,
            },
            seperator:{
                height:1,
                width:'50%',
                maxWidth:300,
                marginHorizontal:'auto',
                marginBottom:10,
                backgroundColor:colorScheme==='dark'?'papayawhip':'black'
            },
            Text:{
                color:theme.text,
                fontSize:18,
                marginBottom:6,
            },
            footerComp:{
                marginHorizontal:'auto',
                color:theme.text,
            },
            row:{
                flexDirection:'row',
                width:"100%",
                maxWidth:600,
                height:100,
                borderStyle:'solid',
                borderColor:colorScheme === 'dark'?'papayawhip':'#000',
                borderWidth:1,
                borderRadius:20,
                overflow:'hidden',
                marginHorizontal:'auto',
            },
            menuTextRow:{
                width:'65%',
                paddingTop:10,
                paddingLeft:10,
                paddingRight:5,
                flexGrow:1,
            },
            menuItemTitle:{
                fontSize:18,
                fontWeight:'bold',
                textDecorationLine:'underline',
            },
            menuItemText:{
                fontSize:16,
                color:theme.text,
            },
            menuImage:{
                width:100,
                height:100,
            }

        });
    } 
}

