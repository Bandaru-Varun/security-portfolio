export default function SecurityHeader() {
return ( <div className="bg-black border-b border-green-500 text-green-400 px-6 py-3 font-mono text-sm flex justify-between">

  <div>
    SECURITY DASHBOARD
    <span className="ml-4 text-green-500">
      Authenticated Session Active
    </span>
  </div>

  <div className="text-green-500">
    STATUS: AUTHORIZED
  </div>

</div>

)
}
