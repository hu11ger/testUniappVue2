// 'use strict';
// exports.main = async (event, context) => {
// 	//event为客户端上传的参数
// 	console.log('event : ', event)

// 	//返回数据给客户端
// 	return event
// };


'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = db.collection('tangShi');
	let query = collection;

	if (event.keyWord && event.keyWord.trim() !== '') {
		// 使用包含匹配的正则表达式
		query = query.where({
			title: new RegExp(event.keyWord, 'i')
		});
	}

	const res = await query.limit(event.limit).skip(event.offset).get();
	return res;
};