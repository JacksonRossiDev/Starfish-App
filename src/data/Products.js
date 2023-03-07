

const products = [
  {
    _id: "1",
    name: "Tommy Rodberg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 89,
    image:
      "https://res.cloudinary.com/duhecoafd/image/upload/v1668544432/271316301_501489474614502_4405311241940753338_n_thmt5y.jpg",
    handle: "@tommy.rodberg",
    followers: "2,837",
    rating: 4,
    
  
  },
  {
    _id: "2",
    name: "Jesse Rego",
    handle: "@_jesserego",
    image:
      "https://res.cloudinary.com/duhecoafd/image/upload/v1668544522/182573033_375825740389119_3845850542208317798_n_oo8kow.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 67,
    followers:"1,142",
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    _id: "3",
    name: "Dylan Scheu",
    handle: "@dylan_scheu",
    followers: "1,689",
    image:
      "https://res.cloudinary.com/duhecoafd/image/upload/v1668546891/dylan_scheu-f75de65a039cdcc272e09a8a46c4609d_nbrb3u.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 78,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
  {
    _id: "4",
    name: "Robbie Prosek",
    handle: "@robbieprosek",
    followers: "2,459",
    image:
      "https://res.cloudinary.com/duhecoafd/image/upload/v1668547113/Screen_Shot_2022-11-15_at_3.18.28_PM_s48c4t.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 79,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },{
    _id: "5",
    name: "Daniel Feal",
    handle: "@danielfeal_",
    followers: "433",
    image:
      "https://res.cloudinary.com/duhecoafd/image/upload/v1668547263/1516310644425_xjgrmn.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 22,
    countInStock: 3,
    rating: 3.5,
    numReviews: 3,
  },{
    _id: "6",
    name: "Porter Stanley",
    handle: "@porter.stanley",
    followers: "1,072",
    image:
      "https://res.cloudinary.com/duhecoafd/image/upload/v1668549260/263156779_246574634082626_8872613021807704944_n_ncdnq2.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 58,
    countInStock: 7,
    rating: 3.5,
    numReviews: 3,
  },{
    _id: "7",
    name: "John Scolaro",
    handle: "@john_scolaro",
    followers: "1,748",
    image:
      "https://res.cloudinary.com/duhecoafd/image/upload/v1668547823/311676566_2174036699441919_341254965951084091_n_xkauea.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 88,
    countInStock: 5,
    rating: 3.5,
    numReviews: 3,
  },{
    _id: "8",
    name: "Gustoybox",
    handle: "@gustoybox",
    followers: "11.8k",
    image:
      "https://res.cloudinary.com/duhecoafd/image/upload/v1668548907/download_1_sjkwbw.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 239,
    countInStock: 4,
    rating: 3.5,
    numReviews: 3,
  },{
    _id: "9",
    name: "Brett Ekblom",
    handle: "@native_construction",
    followers: "1,054",
    image:
      "https://res.cloudinary.com/duhecoafd/image/upload/v1668549176/Screen_Shot_2022-11-15_at_3.52.51_PM_eit7kx.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 73,
    countInStock: 5,
    rating: 3.5,
    numReviews: 3,
  },{
    _id: "10",
    name: "Makenzie Thorn",
    handle: "@thornmakenzie",
    followers: "1,252",
    image:
      "https://res.cloudinary.com/duhecoafd/image/upload/v1668549719/267681919_954440468598949_5999759080013587109_n_v3yx1d.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 87,
    countInStock: 6,
    rating: 3.5,
    numReviews: 3,
  },{
    _id: "11",
    name: "Patrick Lewis",
    handle: "@Patrick.lewis73",
    followers: "351",
    image:
      "https://res.cloudinary.com/duhecoafd/image/upload/v1668549498/11821338_1450300995298277_2040046737_a_fufq8r.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 49,
    countInStock: 7,
    rating: 3.5,
    numReviews: 3,
  },
  {
    _id: "12",
    name: "Jackson Rossi",
    handle: "@jacksonrossi",
    followers: "3,230",
    image:
      "https://res.cloudinary.com/duhecoafd/image/upload/v1668545069/jacksonrossi-65cb43c32d68e0cf007ed08c21d6e177_hd_vj1m5o.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 89,
    countInStock: 7,
    rating: 3.5,
    numReviews: 3,
  }
];
export default products;
