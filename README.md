[Management requests.pdf](https://github.com/ali-alhwayzee/managment_requests_API_nodejs_SQL/files/7278709/Management.requests.pdf)
# managment_requests_API_nodejs_SQL
 ## APIs  include : 

###No	###Api	     ###call    ###Description 
1	/customers	POST	create a new request by customer
2	/customers	GET	retrieve all requests for customer by national ID
3	/operator	GET	retrieve all requestes for operator
4	/operator/:id	PUT	accept a request with request id by operator
5	/operator/:id	DELETE	Reject a request(delete request with request id by operator)
6	/adjutant	GET	get all requests sent to adjutant /That accepted either by operator or  rejected by the manager
7	/adjutant/:id	PUT	accept a request with request id by adjutant
8	/adjutant/:id	DELETE	reject a request with request id by adjutant
9	/manager	GET	get all requests sent to manager
10	/manager	PUT	accept a request with request id by manager
11	/manager	DELETE	reject a request with request id by adjutant
