$('#media').hide();
$('#addMedia').hide();
$('#return').hide();

// Search Item -------------------------------------
$('#searchMedia').on('click', function(){
    $('#media').show();
    $('#return').show();
    $('#searchMedia').hide();
    $('#inputMedia').hide();
    $('#seeCatalog').hide();
})
// Input new Item -----------------------------------
$('#inputMedia').on('click', function(){
    $('#addMedia').show();
    $('#return').show();
    $('#searchMedia').hide();
    $('#inputMedia').hide();
    $('#seeCatalog').hide();
})
// Open Catalog ---------------------------------------
$('#seeCatalog').on('click', function(){
    $('#table').remove();
    $('#return').show();
    $('#searchMedia').hide();
    $('#inputMedia').hide();
    $('#seeCatalog').hide();
    let structure = 
    `
    <table id="table">
        <tr><td>Title</td><td>Type</td><td>Checked Out</td></tr>
    </table>
    `
    $('#catalog').append(structure);
    for (let i = 0; i < catalog.catalog.length; i++){
        $('#table').append(`<tr><td>${catalog.catalog[i].title}</td><td>${catalog.catalog[i].type}</td><td>${catalog.catalog[i].isCheckedOut}</td></tr>`)
    }
    $('#return').show();
})

// Return Button ----------------------------------------------------------
$('#return').on('click', function(){
    $('#table').remove();
    $('#media').hide();
    $('#addMedia').hide();
    $('#return').hide();
    $('#searchMedia').show();
    $('#inputMedia').show();
    $('#seeCatalog').show();

    $('#bookdata').hide();
    $('#moviedata').hide();
    $('#cddata').hide(); 
    $('#enterTitle').hide();
    $('#submitData').hide();
    
})
// Add to Catalog -------------------------------------------------------
$('#submitData').hide();
$('#submitData').on('click', function(){
    let title = $('#enterTitle').val();
    let mediaType = $('#mediatype').val();
    // Book variables
    let author = $('#enterAuthor').val();
    let pages = $('#enterPages').val();

    // Movie variables
    let director = $('#enterDirector').val();
    let runTime = $('#enterRunTime').val();

    // CD variables
    let artist = $('#enterArtist').val();
    let songs = [];
    for (let i=0;i<5;i++){
        songs.push($(`#enterSong${i+1}`).val()); 
    }

    if (mediaType == 'book'){
        // books.push(new Book(title,author,pages))
        catalog.addToCatalog(new Book(title,author,pages));
    }
    if (mediaType == 'movie'){
        // movies.push(new Movie(title,director,runTime));
        catalog.addToCatalog(new Movie(title,director,runTime));
    }
    if (mediaType == 'cd'){
        // cds.push(new CD(title,artist,songs));
        catalog.addToCatalog(new CD(title,artist,songs));
    }
    $('#enterTitle').val('');
    $('#enterAuthor').val('');
    $('#enterPages').val('');
    $('#enterDirector').val('');
    $('#enterRunTime').val('');
    $('#enterArtist').val('');
    for (let i=0;i<5;i++){
        $(`#enterSong${i}`).val('');
    }
    $('#bookdata').hide();
    $('#moviedata').hide();
    $('#cddata').hide();
    $('#enterTitle').hide();
    $('#submitData').hide();
});
// Select media type ----
$('#bookdata').hide();
$('#moviedata').hide();
$('#cddata').hide(); 
$('#enterTitle').hide();
$('#submitData').hide();

$('#confirmType').on('click',function(){
    let mediaType = $('#mediatype').val();
    if (mediaType == 'book'){
        $('#submitData').show();
        $('#enterTitle').show();
        $('#bookdata').show();
        $('#moviedata').hide();
        $('#cddata').hide();
    }
    if (mediaType == 'movie'){
        $('#submitData').show();
        $('#enterTitle').show();
        $('#moviedata').show();
        $('#bookdata').hide();
        $('#cddata').hide();
    }
    if (mediaType == 'cd'){
        $('#submitData').show();
        $('#enterTitle').show();
        $('#cddata').show();
        $('#bookdata').hide();
        $('#moviedata').hide();
    }
    $('#submitData').show();
})
// ------------------------
// ------------------------------------------------------
$('#book').hide();
$('#movie').hide();
$('#cd').hide();
let currentItem;

// Search for an Item by Title ---------------------------------
$('#searchbtn').on('click', function(){
    $('#generaldata h1').empty();
    $('#checkOutStatus').val('');
    $('#rating').val('');
    $('#author').empty();
    $('#pages').empty();
    $('#director').empty();
    $('#runTime').empty();
    $('#artist').empty();
    for (let i=0;i<4;i++){
        $('#songs').empty();
    }
    let searchTitle = $('#search').val();
    console.log(searchTitle);
    for (let media of catalog.catalog){
        if (media.title == searchTitle){
            currentItem = media; 
            if (media.type == 'book'){
                $('#book').show();
                $('#movie').hide();
                $('#cd').hide();
                $('#generaldata h1').append(media.title);
                $('#checkOutStatus').val(media.isCheckedOut);
                $('#rating').val(media.getAverageRating());
                $('#author').append(media.author);
                $('#pages').append(media.pages);
                break;
            }
            if (media.type == 'movie'){
                $('#book').hide();
                $('#movie').show();
                $('#cd').hide();
                $('#generaldata h1').append(media.title);
                $('#checkOutStatus').val(media.isCheckedOut);
                $('#rating').val(media.getAverageRating());
                $('#director').append(media.director);
                $('#runTime').append(media.runTime);
                break;
            }
            if (media.type == 'cd'){
                $('#book').hide();
                $('#movie').hide();
                $('#cd').show();
                $('#generaldata h1').append(media.title);
                $('#checkOutStatus').val(media.isCheckedOut);
                $('#rating').val(media.getAverageRating());
                $('#artist').append(media.artist);
                for (let i=0;i<4;i++){
                    $('#songs').append(`<li>${media.songs[i]}</li>`);
                }
                break;
            }
        }
    }  
});

// Toggle Check Out Status ------------------------------
$('#checkedOutbtn').on('click', function(){
    currentItem.toggleCheckOutStatus();
    $('#checkOutStatus').val(currentItem.isCheckedOut);
})

// Add new Rating -------------------------------------------
$('#addRating').on('click', function(){
    currentItem.addRating(parseInt($('#rate').val()));
    console.log(currentItem.ratings)
    $('#rating').val(currentItem.getAverageRating())
    $('#rate').val('');
})


