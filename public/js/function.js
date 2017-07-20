/**
 * @Type	: Functional File
 * @Brief	: 提供功能支持
 * @Author	: 林晓州
 * @Date	: 2017.07.20
 */

var OL_TrainTickets = function() {};



OL_TrainTickets.Request = function() { 

	var data = {};
	$.ajax({  
	　　type 	 : 'post',
	　　url  	 : '/rebase',  
	　　data 	 : data,  
	　　dataType : 'Json',
	　　success  : function(msg){
			if(msg.error) {
				alert(msg.error)
			}
			else {
				alert("重置完成")
			}
		},
	　　error:function(){
	　		alert("无法获取数据！请检查网络！");
	　　}
	})
};

