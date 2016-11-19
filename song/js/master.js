window.onload = function() {
	var pub = document.getElementById('publish');
	var part = document.getElementById('pub_part');
	pub.onclick = function() {
		pub.style.display = 'none';
		part.style.display = 'block';
	}
	pub.style.display =' block';
	part.style.display = 'none';
	//确认发布判断函数开始
	var sure = document.getElementsByClassName('sure');
	sure[0].onclick = function () {
		var t_len = document.getElementsByClassName('title')[0].value.length;
		var c_len = document.getElementsByClassName('area')[0].value.length; 
		if (t_len==0||t_len>30) {
			alert("公告标题不能为空或超过30字"); 
		}
		else if (c_len==0||c_len>200) {
			alert("公告内容不能为空或超过200字");
		} 
		else {
			alert("恭喜你，公告发布成功！");
		}
	}
	//确认发布判断函数结束

	//取消发布
	var reset = document.getElementsByClassName('reset');
	reset[0].onclick = function() {
		pub.style.display = 'block';
		part.style.display = 'none';
	}

	SongSubmit.onclick=function(){
			 $.ajax({
			         url:'demo.php',
			         type:"POST",
			        data:$('#form').serialize(),
			         // success: function(data) {
			         //     $("#result").text(data);
			         // }
			    });
	}
}