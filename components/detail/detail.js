import React,{ component } from 'react';
import { PullList , PullView } from 'react-native-pull';
import {
	StyleSheet,
	View,
	Text,
	Image,
	Button,
	ListView,
	TouchableOpacity,
	ActivityIndicator
} from 'react-native';
import Dimensions from 'Dimensions';
var width =Dimensions.get('window').width;
// 引入导航条
var DetailNav = require('./detailNav.js');

var Detail = React.createClass({
	getInitialState:function(){
		var ds = new ListView.DataSource({
			rowHasChanged:function(r1,r2){
				return r1 !== r2;
			}
		});
		return {
			dataSource:ds,
			title:''
		}
	},
	componentDidMount:function(){
		var id = this.props.id;
		var url = 'http://api.meituan.com/group/v1/deal/recommend/collaborative?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=hWCwhGYpNTG7TjXWHOwPykgoKX0%3D&__skno=433ACF85-E134-4FEC-94B5-DA35D33AC753&__skts=1436343274.685593&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&cate=0&ci=1&cityId=1&client=iphone&did=' + id + '&district=-1&fields=id%2Cslug%2Cimgurl%2Cprice%2Ctitle%2Cbrandname%2Crange%2Cvalue%2Cmlls%2Csolds&hasbuy=0&latlng=0.000000%2C0.000000&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-08-15-36746&offset=0&scene=view-v4&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_i550poi_ktv__d__j___ab_i_group_5_3_poidetaildeallist__a__b___ab_gxhceshi0202__b__a___ab_pindaoquxincelue0630__b__b1___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_i550poi_xxyl__b__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7'
		fetch(url)
			.then((res)=>res.json())
				.then((resData)=>{
					this.setState({
						dataSource:this.state.dataSource.cloneWithRows(resData.data.deals),
						title:resData.data.title
					});
				});
	},
	 onPullRelease:function(resolve) {
	  	var id = this.props.id;
		var url = 'http://api.meituan.com/group/v1/deal/recommend/collaborative?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=hWCwhGYpNTG7TjXWHOwPykgoKX0%3D&__skno=433ACF85-E134-4FEC-94B5-DA35D33AC753&__skts=1436343274.685593&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&cate=0&ci=1&cityId=1&client=iphone&did=' + id + '&district=-1&fields=id%2Cslug%2Cimgurl%2Cprice%2Ctitle%2Cbrandname%2Crange%2Cvalue%2Cmlls%2Csolds&hasbuy=0&latlng=0.000000%2C0.000000&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-08-15-36746&offset=0&scene=view-v4&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_i550poi_ktv__d__j___ab_i_group_5_3_poidetaildeallist__a__b___ab_gxhceshi0202__b__a___ab_pindaoquxincelue0630__b__b1___ab_i_group_5_6_searchkuang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_i550poi_xxyl__b__leftflow___ab_b_food_57_purepoilist_extinfo__a__a___ab_waimaiwending__a__a___ab_waimaizhanshi__b__b1___ab_i550poi_lr__d__leftflow___ab_i_group_5_5_onsite__b__b___ab_xinkeceshi__b__leftflowGhomepage_guess_27774127&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7'
		fetch(url)
			.then((res)=>res.json())
				.then((resData)=>{
					this.setState({
						dataSource:this.state.dataSource.cloneWithRows(resData.data.deals),
						title:resData.data.title
					});
				});
	  setTimeout(() => {
	          resolve();
	      }, 1500);
	},
	topIndicatorRender:function(){
		return  (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                <ActivityIndicator size="small" color="gray" />
                <Text>玩命加载中...</Text>
    		</View>
        );
	},
	render:function(){
		return (
			<View style={{flex:1}}>
				{/*导航条*/}
				<DetailNav txt={'商品详情'} backFunc={this.back}/>
				<PullView 
					onPullRelease={this.onPullRelease}
					topIndicatorRender={this.topIndicatorRender}
				>
					<ListView
						dataSource = {this.state.dataSource}
						renderHeader = {this.renderHeader} 
						renderRow = {this.renderRow}
						renderFooter = {this.renderFooter}
						style={styles.containStyle}/>	
				</PullView>
			</View>
		)
	},
	renderNav:function(){
		return (<DetailNav txt={'商品详情'} backFunc={this.back}/>)
	},
	renderHeader:function(){
		return (
			<View>
				{/*商品大图*/}
				<Image source={{uri:this.props.imgUrl}} 
					style={styles.logoStyle}
				/>
				{/*商品详情*/}
				{this.renderLogoDetail()}
				{/*随时退*/}
				{this.renderReturnGoods()}
				{/*更多商品的头部*/}
				<Text style={styles.titleStyle}>{this.state.title}</Text>
			</View>
		)
	},
	renderLogoDetail:function(){
		return (
			<View style={styles.logoDetailStyle}>
				<View style={styles.detailLeftStyle}>
					<Text>￥</Text>
					<Text style={styles.detailPriceStyle}>{this.props.price}</Text>
					<Text>门市价:￥{this.props.value}</Text>
				</View>
				 <Text style={styles.detailRightStyle}>立即抢购</Text>
			</View>
		)
	},
	renderReturnGoods:function(){
		return (
			<View style={styles.RDStyle}>
				<View style={styles.RDLeftStyle}>
					<Image source={require('../../images/icon_deal_anytime_refund.png')} />
					<Text style={styles.RDLeftTxtStyle}>随时退</Text>
				</View>
				<Text style={styles.RDRightStyle}>已售{this.props.solds}</Text>
			</View>
		)
	},
	renderRow:function(rowData){
		var imgUrl = rowData.imgurl.replace('w.h','100.100');
		return (
			<View >
				{/*更多商品*/}
				<TouchableOpacity
					activeOpacity={0.6}
					onPress={this.func(rowData.id,imgUrl,rowData.price,rowData.value,rowData.solds)}
				>
					<View style={styles.cellStyle}>
						<Image source={{uri:imgUrl}}
							style={styles.imgStyle}/>
						<View style={styles.middleStyle}>
							<Text style={styles.mainTitleStyle}>{rowData.brandname}</Text>
							<Text>{rowData.title}</Text>
							<Text style={styles.priceStyle}>￥{rowData.price}</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		)
	},
	renderFooter:function(){
		return (
			<View style={styles.footStyle}>
				<Text style={{fontSize:20}}>已经全部加载</Text>
			</View>
		)
	},
	func:function(id,imgUrl,price,value,solds){
		var that = this;
	    var obj = {
	      id:id,
	      imgUrl:imgUrl,
	      price:price,
	      value:value,
	      solds:solds
	    }
		return function(){
			that.props.navigator.replace({
        	component:Detail,
        	title:'detail',
        	passProps:obj
      });
		}
	},
	back:function(){
		this.props.navigator.pop();
	}
});
// 样式表
var styles = StyleSheet.create({
	containStyle:{
		backgroundColor:"#f7f7f7"
	},
	logoStyle:{
		width:width,
		height:200,	
	},
	logoDetailStyle:{
		backgroundColor:"#fefefe",
		flexDirection:"row",
		justifyContent:"space-between",
		paddingBottom:20,
		marginBottom:2,
	},
	detailLeftStyle:{
		width:150,	
		height:50,
		marginLeft:10,
		flexDirection:"row",
		justifyContent:"space-around",
		alignItems:"flex-end",
	},
	detailPriceStyle:{
		fontSize:30,
		marginLeft:-10
	},
	detailRightStyle:{
		marginRight:10,
		borderRadius:10,
		alignSelf:"flex-end",
		fontSize:15,
		height:30,
		width:80,
		backgroundColor:'orange',
		color:"#fefefe",
		textAlign:"center",
		lineHeight:25,
	},
	RDStyle:{
		backgroundColor:"#fefefe",
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
		paddingTop:10,
		paddingBottom:10
	},
	RDLeftStyle:{
		marginLeft:10,
		flexDirection:'row',
		alignItems:"center"
	},
	RDLeftTxtStyle:{
		marginLeft:10,
		color:"red"
	},
	RDRightStyle:{
		marginRight:10
	},
	titleStyle:{
		height:50,
		marginTop:30,
		marginLeft:10,
		backgroundColor:"#fefefe",
		fontSize:15,
		lineHeight:40,
		color:"#000"
	},
	cellStyle:{
		marginTop:2,
		backgroundColor:"#fefefe",
		flexDirection:"row",
		alignItems:"center",
	},
	imgStyle:{
		width:80,
		height:80,
	},
	middleStyle:{
		marginLeft:25,
		justifyContent:"space-between",
		width:width*2/3,
	},
	mainTitleStyle:{
		color:"#333",
		fontSize:18,
	},
	priceStyle:{
		fontSize:15,
		color:"orange"
	},
	footStyle:{
		marginTop:10,
		height:30,
		backgroundColor:"#fefefe",
		alignItems:"center",
		justifyContent:"center"
	}
});

module.exports = Detail;