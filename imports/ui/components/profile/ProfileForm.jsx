import React from 'react';

export default ProfileForm = props => {
  let user = props.user;

  if(!user) return <h1>Nothing</h1>
  return(
    <form id="profile-form" className="col-xs-12 col-md-4 col-md-offset-4" ref={() => validator()} role="form" data-toggle="validator">
      <div className="page-header">
        <h2>Public Profile</h2>
        <div className="form-group" >
          <label htmlFor="fname control-label">Full Name</label>
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input
              type="text"
              className="form-control input-lg"
              id="fname"
              placeholder="Full Name"
              pattern="^[a-zA-Z ]*$"
              data-pattern-error="Names should be in alphabets only"
              defaultValue={user.profile.fullname}
              />
          </div>
          <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
          <div className="help-block with-errors"></div>
        </div>

        <div className="form-group">
          <div className="btn-group fullWidth" data-toggle="buttons" ref={() => preselectGender(user.profile.gender)}>
            <label>I am a ...</label>
            <br />
            <label className="btn btn-default genderBtnWrapper btn-lg oneThirdWidth">
              <input type="radio" name="gender" id="male" autoComplete="off"/>
              Male
            </label>

            <label className="btn btn-default genderBtnWrapper btn-lg oneThirdWidth">
              <input type="radio" name="gender" id="female" autoComplete="off" />
              Female
            </label>

            <label className="btn btn-default genderBtnWrapper btn-lg oneThirdWidth">
              <input type="radio" name="gender" id="hidden" autoComplete="off" />
              Hidden
            </label>
          </div>
        </div>

        <div className="form-group" >
          <label htmlFor="fname control-label">Status</label>
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-console"></i></span>
            <textarea
              type="text"
              rows="5"
              className="form-control input-lg"
              id="status"
              placeholder="Status"
              defaultValue={user.profile.status}
              />
          </div>
          <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
          <div className="help-block with-errors"></div>
        </div>
      </div>

      <div className="page-header">
        <h2>Private Profile</h2>

        <div className="form-group" >
          <label htmlFor="email control-label">Email address</label>
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
            <input
              required
              disabled
              type="email"
              className="form-control input-lg"
              id="email"
              placeholder="Email"
              data-error="Please provide a valid email address"
              defaultValue={user.emails[0].address}
              />
          </div>
          <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
          <div className="help-block with-errors"></div>
        </div>
      </div>

      <div className="form-group">
        <button onClick={save.bind(this)} id="saveButton" type="submit" className="btn btn-success btn-lg fullWidth marginTop15">Save</button>
      </div>
    </form>
  )
}

const preselectGender = gender => {
  $(".genderBtnWrapper").removeClass("active");
  $(".genderBtnWrapper:has(input#"+ gender + ")").addClass("active");
}

const save = e => {
  e.preventDefault();

  let fullname = $("#fname").val();
  let gender = $(".genderBtnWrapper.active").children().attr("id");
  let status = $("#status").val();

  let profile = {
    fullname: fullname,
    gender: gender,
    status: status
  }

  Meteor.call("users.updateProfile", profile, (err, res) => {
    if(err) Bert.alert(err.reason, "danger", "growl-bottom-left");

    if(!err){
      Bert.alert("Profile Updated!", "info", "growl-bottom-left");
    }
  })

}


const validator = () => {
  $("#profile-form").validator();
}
