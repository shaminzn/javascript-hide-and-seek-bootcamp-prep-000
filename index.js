function getFirstSelector(selector)
{
  return document.querySelector(selector);
}


function nestedTarget()
{
  return document.querySelector('div#nested div.target');
}

function deepestChild()
{
  const list = document.querySelectorAll("#grand-node div");
  return list[list.length-1];
}

function increaseRankBy(n)
{
  console.log(typeof n);
  const list = document.querySelectorAll(".ranked-list")
  for(let i = 0; i < list.length; i++)
  {
    const sublist = list[i].querySelectorAll("li");
    for(let j = 0; j < sublist.length; j++)
    {
      let variable = sublist[j].innerHTML;
      let result = parseInt(variable) + n;
      sublist[j].innerHTML = result.toString();
    }
  }
} 
