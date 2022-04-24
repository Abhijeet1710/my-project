
        <div className="mt-12 card px-4 py-8 rounded-lg">

        <div className='flex justify-between'>
          <h1 className="text-lg mt-1 mb-8 font-medium drop-shadow-xl text-orange-600">Participated Projects & Amount Donated</h1>
          <div> 
            <span className="text-lg mt-1 mb-8 font-medium drop-shadow-xl text-orange-600"> 
              {/* { web3.eth.getBalance("0x9961C2489671339df9953f09a2F994EF7457A2B1")}  */}
            </span> 
          </div>
        </div>
        <div className="px-4">
          
        {
          data.length === 0 ? 
          <Message /> : 
          data.map((it) => <DonorFirstCard key={it.projectId} item={it} deployed_contract={deployed_contract} my_account={my_account} />)
        }

        </div>
      </div>