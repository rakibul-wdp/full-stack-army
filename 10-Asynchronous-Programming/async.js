function main() {
  setTimeout(() => {
    console.log("load last")
  }, 10)

  setTimeout(() => {
    console.log("load first")
  }, 0)

  test()
}

function test() {
  console.log("test")
}

main();