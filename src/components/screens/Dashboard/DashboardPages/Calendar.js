import React,{useEffect} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Link} from 'react-router-dom';
import history from '../../../../history';

export default function Calendar() {


	useEffect(() => {
        if (!localStorage.getItem("authToken")) {
            history.push("/login")
        }
    },[])

  return (

			<div className="min-height-200px">
				<div className="page-header">
					<div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="title">
								<h4>Calendar</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard/home">Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Calendar</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="pd-20 card-box mb-30">
					<div className="calendar-wrap">
						<div id='calendar'></div>
					</div>
          <FullCalendar defaultView='dayGridMonth' plugins={[dayGridPlugin]} />
				</div>
			</div>
  );
}
