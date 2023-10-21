var inputData = ""
$("#Initiate").on("click",ROLinitiate)
function ROLinitiate(){
    var binText = $(".binary-data")
    var counter = 0
    console.log("initiate")
    const myTimeOut = setInterval(shiftLeft,5000)
    function shiftLeft(){
        var binTextData = binText.text()
        binTextData = binTextData+inputData[counter]
        binTextData=binTextData.slice(1,binTextData.length)
        binText.text(binTextData)
        counter+=1
        $("#AL"+counter).text(inputData[counter-1])
        $("#EBX"+counter).text(binTextData)
        if(counter>=8){
            clearInterval(myTimeOut)
        }
    }
}

$("#submit").on("click",function(){
    inputData = $("#binary-input").val()
})

