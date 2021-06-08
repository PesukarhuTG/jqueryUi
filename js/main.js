$(function() {
	$('.file').draggable({
		drag:function() {
			$('.ui-draggable-dragging').css({'opacity':'0.6', 'z-index':'99'});
		}

	});
	$('.folder').droppable({ 
		drop:function(){

			//dragged value
			let value = $('.ui-draggable-dragging p').text();

			$('.folder').hover().css('box-shadow', 'none');

			//highligher dropped folder
			$(this).hover().css('box-shadow', '4px 4px 8px 0px rgba(34, 60, 80, 0.4)');

			//open and close popup
			function successDrag() {
				$('#modal00').addClass('active');
				setTimeout(function() {
					$('#modal00').removeClass('active');
				}, 900);
			}

			//check drop folder and as result add text-items to ul list
			function addFolderList(selector) {
				$(`${selector}`).append(`<li>${value}</li>`);
				$(this).find('img').attr('src','img/folder-full.svg');
				successDrag();
			}

			function changeImageFolder(element) {
				$(`${element}`).find('img').attr('src','img/folder-full.svg');
			}

			if ($(this).hasClass('folder01')) {
				addFolderList('#modal01 ul');
				changeImageFolder('.folder01');
			} else if ($(this).hasClass('folder02')) {
				addFolderList('#modal02 ul');
				changeImageFolder('.folder02');
			} else {
				addFolderList('#modal03 ul');
				changeImageFolder('.folder03');
			}

			//delete file from desctope
			$('.ui-draggable-dragging').remove();
			
		}});

		//open folder's content
		function contentModalWindow(selector) {
			$('.folder').hover().css('box-shadow', 'none');
			$(`${selector}`).css('display', 'block');
			$('.close-btn').on('click', function () {
				$(`${selector}`).css('display', 'none');
			})
		}

		$('.folder').on('click', function() {
			if ($(this).hasClass('folder01')) {
				contentModalWindow('#modal01');
			} else if ($(this).hasClass('folder02')) {
				contentModalWindow('#modal02');
			} else {
				contentModalWindow('#modal03');
			}
		})

	//SORTABLE
	$('.sortable').sortable();

});