import React from "react";
export function InfoSection({ dataIsLoading }) {
  return (
    <>
      {" "}
      <Divider
        sx={{
          marginBottom: "10px",
        }}
      >
        Info
      </Divider>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          {dataIsLoading && (
            <PersonGroup
              category={data[0].category}
              avatarSrc={data[0].avatar}
              username={data[0].username}
              cr_date={data[0].create_time}
            />
          )}
        </Grid>
        <Grid item xs={4}>
          {dataIsLoading && <PersonQuastions quastion={data[0].quastion} />}
        </Grid>
        <Grid item xs={4}>
          {dataIsLoading && <PersonAnswers answer={data[0].answer} />}
        </Grid>

        <Grid item xs={12}>
          <Grid container direction={"row"} columns={8}>
            <Grid item xs={4} width={"100%"}>
              {dataIsLoading && <PersonFollower follower={data[0].follower} />}
            </Grid>
            <Grid item xs={4}>
              {dataIsLoading && (
                <PersonFollowing following={data[0].following1} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
