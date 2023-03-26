# Problem Solvers Caffe (PS Caffe)

##### PS Caffe is an imaginary online coffee delivery service. This business is designed specially for programmers by keeping their life style in mind. We need an application to accept orders from online. The application will have the following functional and non-functional requirements.

##### Special Notes: We are not planning to grow fast. We need an MVP (Minimal Viable Product) or Workable Prototype to research our targeted market.

### Functional Requirements:

<details>
  <summary>Local Authentication</summary>

  <p>At the beginning we don't want to spend more on authentication services. Just keep it simple by implementing a local authentication using email & password. But make sure, we can extend local auth to OAuth2 anytime in future. We need to following features -</p>
  <ul>
    <li>Hashed password</li>
    <li>Email verification</li>
    <li>Forget password</li>
    <li>Block users if necessary</li>
  </ul>
</details>
<details>
  <summary>Multiple Roles</summary>

  <p>There will be mainly five roles -</p>
  <ul>
    <li>Admin: Admin can create and manage everything including sales data</li>
    <li>Manager: Manager can't be able to create anything but can see sales data, inventory and products</li>
    <li>Chef: They can only see queue orders</li>
    <li>DeliveryMan: They can manage the queue orders and change status</li>
    <li>User: won't able to see any admin information but able to check products, reviews and place orders.</li>
  </ul>
</details>
<details>
  <summary>User will be able to place orders</summary>

</details>
<details>
  <summary>Sales dashboard</summary>

</details>
<details>
  <summary>Manage inventory</summary>

</details>
<details>
  <summary>Live Tracking of the order</summary>

</details>

### Non Functional Requirements:

<details>
  <summary>secure</summary>

</details>
<details>
  <summary>reliable</summary>

</details>
<details>
  <summary>easy maintainability</summary>

</details>
<details>
  <summary>awesome usability</summary>

</details>
<details>
  <summary>high availability (not main concern for mvp)</summary>

</details>
<details>
  <summary>scalability (not main concern for mvp)</summary>

</details>
