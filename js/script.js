$('body').on('click', function(){

	var docInfo = {
		
		info: {
			title:'Тестовый документ PDF',
			author:'Viktor',
			subject:'Theme',
			keywords:'Ключевые слова'
		},
		
		pageSize:'A4',
		pageOrientation:'landscape',
		pageMargins:[50,50,50,50],
		
		header:function(currentPage,pageCount) {
			return {
				text: currentPage.toString() + 'из' + pageCount,
				alignment:'right',
				margin:[0,30,10,50]
			}
		},
		
		footer:[
			{
				text:'Агронаем',
				alignment:'center',
			}
		],
		
		content: [
		
			{
				table:{
					widths:['50%','50%'],
					
					body:[
						['Первая','Вторая'],
						['Первая','Вторая'],
						[{text:'текстовое содержимое', bold:true}, 'Вторая']
					],
					headerRows:1
				}
			},
			
			
		],
		
		styles: {
			header: {
				fontSize:25,
				bold:true,
				alignment:'right'
			}
		}
	}
	
	pdfMake.createPdf(docInfo).download('name.pdf');
	
});
	


