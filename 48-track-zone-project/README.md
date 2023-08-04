## Track Zone Project Overview

- User can set their own time and timezone, this clock can't be deleted only be edited
- User can create as many clock as they want
  - Each clock has their own title or name
  - Own Timezone
  - Simple Events with time
  - Time difference between users timezone and clock timezone in hour and minute
- User can edit or delete a clock
- Timezone could be UTC (standard), GMT, PST, EST
- Only date-fns library is allowed for this project, res of the logic should write by myself
- Every data must be validated

## What to submit?

- A proper breakdown of the requirements
- Component Tree and Data Flow
- Finally, Proper use of components and custom hooks

## Requirements Breakdown

- We will have a local clock and a list of clocks
- Clock Object will look like

  - id
  - title
  - timezone
    - type (UTC, GMT, PST, EST)
    - offset
  - event

- Event Object will look like
  - id
  - clockId
  - text
  - timezone
  - startTime
  - endTime
- We will use a clock object for local clock.
- And use an array of clocks for other clocks.
- We will use event id to create events inside clock
