import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from '../component/Header';
import { collection, doc, setDoc, getDocs, where, orderBy, query, onSnapshot, docs, snapshot, getFirestore, Timestamp, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import {
  useState, useEffect,
  useLayoutEffect,
  useCallback
} from 'react'

export default function Lost({ navigation, route }) {

  const [postData, setPostData] = useState([]);
  useEffect(() => {
    Get();
  }, [])
  useLayoutEffect(() => {
    const collectionRef = collection(db, 'Post');
    const unsubscribe = onSnapshot(collectionRef, querySnapshot => {
      console.log('querySnapshot unsusbscribe', querySnapshot?.docs);
      Get();
      return unsubscribe;
    })

  }, []);

  async function Get() {
    let arr = [];
    const q = query(collection(db, "Post"), where('Category', "==", route.params.title));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      arr.push(doc.data());
      console.log(doc.id, " => ", doc.data());
    });
    console.log("Array", arr);
    if (arr.length > 0) {
      setPostData(arr);
    }

  }
  const onSend = useCallback((messages = []) => {

    // console.log("muneeb");
    const chat = collection(db, "Post");
    setPostData(pre => [
      ...pre,
      {

        id: '2',
        title: pre.Title,
        date: pre.time,
        description: pre.Description,
        image: pre.url

      }

    ]);
    console.log("after set message");

    // setMessages([...messages, ...messages]);
    // const { _id, createdAt, text, user } = messages[0];
    console.log("after set mdsd");
    Create();
  }, []);

  const DATA = [
    {
      id: '0',
      title: 'Rolex Watch lost near cafeteria',
      date: 'Oct 15, 2022',
      description: 'Rolex Gold Watch with black strips',
      image: "https://5.imimg.com/data5/SELLER/Default/2020/9/EX/VH/QG/26510561/new-product-1000x1000.jpeg"
    },
    {
      id: '1',
      title: 'Sveston Watch lost near A block',
      date: 'Oct 14, 2022',
      description: 'Sveston Gold Watch with brown strips ',
      image: "https://cdn.shopify.com/s/files/1/0003/5815/4293/products/IMG_3900_1200x.jpg?v=1671108959"
    },
    {
      id: '2',
      title: 'Rolex Watch lost near cafeteria',
      date: 'Oct 12, 2022',
      description: 'Rolex Gold Watch with black strips',
      image: "https://www.bobswatches.com/rolex-blog/wp-content/uploads/2021/09/Rolex-Watches-buying-guide-1.png"
    },
    {
      id: '3',
      title: 'Sveston Watch lost near D block',
      date: 'Oct 14, 2022',
      description: 'Sveston Ostego Emperor hand Watch Black Color Sveston Gold Watch with brown strips Sveston Gold Watch with brown strips Sveston Gold Watch with brown strips ',
      image: "https://cdn.shopify.com/s/files/1/0003/5815/4293/products/C-SV-9676-2-2_1200x.jpg?v=1637669392"
    }
  ];
  function onNavigate() {
    navigation.pop()
  }
  console.log(postData);
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header title={route.params.title} navi={() => onNavigate()} />
      {/* BODY */}
      <View style={styles.bodyTop}>
        <TouchableOpacity style={styles.buttonLost}>
          <Text style={styles.buttonText}>Lost</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFound}
          onPress={() => navigation.navigate('Found', { title: route.params.title })}>
          <Text style={styles.buttonText}>Found</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.89 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={postData}
          // keyExtractor={item => item.Title}
          renderItem={({ item }) => {
            return (


              <View style={styles.body}>
                <Image
                  source={{ uri: item.url }}
                  style={[styles.img]}
                ></Image>
                <TouchableOpacity style={{ padding: '4%', flexShrink: 1 }}
                  onPress={() => navigation.navigate('ItemDetails', { title: route.params.title, item: item })}
                >
                  <Text style={{ color: 'white', fontSize: 18, marginBottom: '3%' }}>{item.Title}</Text>
                  <Text style={{ color: 'white', fontSize: 12, marginBottom: '3%' }}>{item.time}</Text>
                  <Text style={{ color: 'grey', fontSize: 12 }}>{(item.Description).length > 40 ? (item.Description).slice(0, 40) + '...' : (item.Description)}</Text>
                  <TouchableOpacity>
                    <Text style={styles.found}>Found</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            )
          }}
        />




        <TouchableOpacity style={styles.addIcon}
          onPress={() => navigation.navigate('LostItemAdd', { title: route.params.title })}>
          <Ionicons style={{ color: 'black' }} name="add" size={38} />
        </TouchableOpacity>
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3D3D',
  },
  bodyTop: {
    flex: 0.09,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  buttonLost: {
    backgroundColor: '#242527',
    padding: '2%',
    width: '36%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ce5c2b'
  },
  buttonFound: {
    backgroundColor: '#242527',
    padding: '2%',
    width: '36%',
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  body: {
    flexDirection: 'row',
    backgroundColor: '#242527',
    marginBottom: '4%',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 0.3
  },
  img: {
    width: '35%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  found: {
    color: '#ce5c2b',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  addIcon: {
    position: 'absolute',
    bottom: '5%',
    right: '4%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8
  }
});