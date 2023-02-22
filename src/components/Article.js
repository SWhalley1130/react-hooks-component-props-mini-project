import React from "react";

function Article ({id, title, date="January 1, 1970", preview, minutes})
{
    function evalTime()
    {
        const coffeeArray=[];
        let numCoffee=Math.ceil(minutes/5);

        if (minutes<30)
        {
            for (let i=0; i<numCoffee;i++)
            {
                coffeeArray.push(<span>☕</span>)
            }
        }
        else
        {
            numCoffee=numCoffee/2;
            for (let i=0; i<numCoffee;i++)
            {
                coffeeArray.push(<span>🍱</span>)
            }
        }
        return coffeeArray;
    }

    return(
        <article key={id}>
            <h3>{title}</h3>
            <small>
                {date}
                {evalTime()}
                {`${minutes} minutes to read`}
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;