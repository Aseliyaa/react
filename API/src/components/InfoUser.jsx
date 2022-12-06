function InfoUser({username, email, phone, website}){
    return(
        <div className="flex flex-col text-stone-600">
        <div className="flex flex-row gap-1">
          <p>Username:</p>
          <p>{username}</p>
        </div>
        <div className="flex flex-row gap-1">
          <p>Email:</p>
          <p className="underline">{email}</p>
        </div>
        <div className="flex flex-row gap-1">
          <p>Phone:</p>
          <p>{phone}</p>
        </div>
        <div className="flex flex-row gap-1">
          <p>Site:</p>
          <p className="underline">{website}</p>
        </div>
      </div>
    )
}

export default InfoUser;