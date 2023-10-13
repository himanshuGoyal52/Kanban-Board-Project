import React from 'react'
import Card from '../Card'

export default function Priority({filter , tickets , users}) {
    if(filter.ordering === "priority"){
        tickets.sort((a, b) => (a.priority > b.priority ? -1 : 1));
    }else if(filter.ordering === "title"){
        tickets.sort((a , b) => {
            return (a.title.localeCompare(b.title));
        });
    }

    const urgent = tickets.filter((obj) => {
        return obj.priority === 4;
    })
    const high = tickets.filter((obj) => {
        return obj.priority === 3;
    });
    const medium = tickets.filter((obj) => {
        return obj.priority === 2;
    });
    const low = tickets.filter((obj) => {
        return obj.priority === 1;
    });
    const no_priority = tickets.filter((obj) => {
        return obj.priority === 0;
    });

  return (
    <>
        <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i className='bx bx-dots-vertical-rounded bx-rotate-90' ></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>No priority</span>
            <span>{no_priority.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp' ></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp' ></i>
          </div>
        </div>
        { no_priority.length !== 0 ? 
            no_priority.map((ele , i) => {
                return (<Card key={i} filter={filter} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>No one with no priority</span>)
        }
      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i style={{color : '#fc7840'}} className='bx bxs-message-alt-error'></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>Urgent</span>
            <span>{urgent.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp' ></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp' ></i>
          </div>
        </div>
        { urgent.length !== 0 ? 
            urgent.map((ele , i) => {
                return (<Card key={i} filter={filter} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>No one with urgent priority</span>)
        }
      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i className='bx bx-signal-3' ></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>High</span>
            <span>{high.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp' ></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp' ></i>
          </div>
        </div>
        { high.length !== 0 ? 
            high.map((ele , i) => {
                return (<Card key={i} filter={filter} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>No one with high priority</span>)
        }
      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i className='bx bx-signal-2' ></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>Medium</span>
            <span>{medium.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp' ></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp' ></i>
          </div>
        </div>
        { medium.length !== 0 ? 
            medium.map((ele , i) => {
                return (<Card key={i} filter={filter} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>No one with medium priority</span>)
        }
      </div>

      <div className='grid-col'>
        <div className='grid-col-head'>
          <div >
            <i className='bx bx-signal-1' ></i>
            <span style={{margin:'0 7px' , fontSize:'1.1rem'}}>Low</span>
            <span>{low.length}</span>
          </div>
          <div>
            <i className='bx bx-plus bx-rotate-90 curp' ></i>
            <i className='bx bx-dots-vertical-rounded bx-rotate-90 curp' ></i>
          </div>
        </div>
        { low.length !== 0 ? 
            low.map((ele , i) => {
                return (<Card key={i} filter={filter} obj={ele} user={users} />);
            }) :
            (<span style={{color : '#545454' , fontSize : '0.8rem'}}>No one with low priority</span>)
        }
      </div>
    </>
  )
}
