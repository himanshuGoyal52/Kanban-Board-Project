import React from 'react'
import Card from '../Card'

export default function Status({filter , tickets , users}) {
    const ticket_s = tickets;
    const user_s = users;
    if(filter.ordering === "priority"){
        ticket_s.sort((a , b) => {
            return (a.priority > b.priority);
        })
    }else if(filter.ordering === "title"){
        ticket_s.sort((a , b) => {
            return (a.title.localeCompare(b.title));
        })
    }

    const backlog = ticket_s.filter((obj) => {
        return obj.status === "Backlog";
    })
    const todo = ticket_s.filter((obj) => {
        return obj.status === "Todo";
    });
    const inprogress = ticket_s.filter((obj) => {
        return obj.status === "In progress";
    });
    const done = ticket_s.filter((obj) => {
        return obj.status === "Done";
    });
    const canceled = ticket_s.filter((obj) => {
        return obj.status === "Canceled";
    });

  return (
    <>
        <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i style={{color : '#ff5f56'}} className='bx bxs-error-circle' ></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>Backlog</span>
            <span>{backlog.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp' ></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp' ></i>
          </div>
        </div>
        { backlog.length !== 0 ? 
            backlog.map((ele , i) => {
                return (<Card key={i} filter={filter} obj={ele} user={user_s} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>Nothing is in backlog</span>)
        }
      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i style={{color : '#e2e2e2'}} className='bx bx-circle'></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>Todo</span>
            <span>{todo.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp' ></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp' ></i>
          </div>
        </div>
        { todo.length !== 0 ? 
            todo.map((ele , i) => {
                return (<Card key={i} filter={filter} obj={ele} user={user_s}  />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>Nothing todo</span>)
        }
        
      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i style={{color : '#f1ca4b'}} className='bx bx-loader-circle'></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>In Progress</span>
            <span>{inprogress.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp' ></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp' ></i>
          </div>
        </div>
        { inprogress.length !== 0 ? 
            inprogress.map((ele , i) => {
                return (<Card key={i} filter={filter} obj={ele} user={user_s} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>Nothing is in progress</span>)
        }

      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i style={{color : '#5e6ad2'}} className='bx bxs-check-circle'></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>Done</span>
            <span>{done.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp' ></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp' ></i>
          </div>
        </div>
        { done.length !== 0 ? 
            done.map((ele , i) => {
                return (<Card key={i} filter={filter} obj={ele} user={user_s} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>Nothing is done</span>)
        }

      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i style={{color : '#94a2b3'}} className='bx bxs-x-circle'></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>Canceled</span>
            <span>{canceled.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp' ></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp' ></i>
          </div>
        </div>
        { canceled.length !== 0 ? 
            canceled.map((ele , i) => {
                return (<Card key={i} filter={filter} obj={ele} user={user_s} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>Nothing is canceled</span>)
        }
      </div>
    </>
  )
}
