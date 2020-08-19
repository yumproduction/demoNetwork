import React, { useState } from 'react'
import classes from './Paginator.module.css';
import cn from 'classnames';

let Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

   
    let portionCount = Math.ceil(pageCount/props.portionSize);
    let [portionNumber, setPortionNumebr] = useState(1);
    let leftPortionNumber = (portionNumber - 1)* props.portionSize +1;
    let rightPortionNumeber = props.portionSize*portionNumber;
    return <div className={classes.wrap}>
        <div className={cn(classes.pagination)}>
            {portionNumber >1 && <button onClick = {()=> setPortionNumebr(portionNumber-1)}>Prev</button>}
            {pages
            .filter(p => p >= leftPortionNumber && p<=rightPortionNumeber)
            .map((p) =>{
            return <span key = {p} className = {cn({
                    [classes.selectedPage] : props.selectedPage ===p},
                    classes.pageNum)
               } onClick={(e) => props.onPageChange(p)}>{p}</span>
            })}
            {portionCount >portionNumber && <button onClick = {()=>setPortionNumebr(portionNumber+1)}>Next</button>}
        </div>
    </div>
}

export default Paginator;