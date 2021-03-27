import  React ,  {  Component  }  dari  'react' ;
impor  {
  StyleSheet ,
  Teks ,
  Lihat ,
  StatusBar  ,
  TouchableOpacity
}  dari  'react-native' ;

impor  Logo  dari  '../components/Logo' ;
impor  Formulir  dari  '../components/Form' ;

impor  { Tindakan }  dari  'react-native-router-flux' ;

ekspor  kelas default  Daftar meluas Komponen < { } > {    

  goBack ( )  {
      Tindakan . pop ( ) ;
  }

	render ( )  {
		kembali (
			< View  style = { styles . wadah } >
				< Logo / >
				< Form  type = "Signup" / >
				< View  style = { styles . signupTextCont } >
					< Text  style = { styles . signupText } > Sudah punya akun? < / Teks >
					< TouchableOpacity  onPress = { ini . goBack } > < Text  style = { styles . signupButton } > Masuk < / Teks > < / TouchableOpacity >
				< / Tampilan >
			< / Tampilan >	
			)
	}
}

 gaya  const =  StyleSheet . buat ( {
  wadah : {
    backgroundColor : '# 455a64' ,
    melenturkan : 1 ,
    alignItems : 'center' ,
    justifyContent : 'center'
  } ,
  signupTextCont : {
  	flexGrow : 1 ,
    alignItems : 'flex-end' ,
    justifyContent : 'center' ,
    padding : Vertikal : 16 ,
    flexDirection : 'row'
  } ,
  signupText : {
  	warna : 'rgba (255.255.255,0.6)' ,
  	fontSize : 16
  } ,
  signupButton : {
  	warna : '#ffffff' ,
  	fontSize : 16 ,
  	fontWeight : '500'
  }
} ) ;
