// from data.js
var tableData = data;

// YOUR CODE HERE!
function createtable (data) {
    var tbody = d3.select("tbody")
    tbody.html ("")
    data.forEach((row) =>{
        r=tbody.append("tr")
        Object.values(row).forEach((cell)=>{
            c=r.append("td")
            c.text(cell)

        }
        
        )
    }
    )
}
createtable (data);
function buttonclicked(){
var filterdata = tableData
var date = d3.select("#datetime").property("value")
if (date) {
    filterdata = filterdata.filter(row=>row.datetime == date)

}

var city = d3.select("#city").property("value")
if (city) {
    filterdata = filterdata.filter(row=>row.city == city)

}


createtable (filterdata)
}
d3.select("#filter-btn").on("click", buttonclicked)
