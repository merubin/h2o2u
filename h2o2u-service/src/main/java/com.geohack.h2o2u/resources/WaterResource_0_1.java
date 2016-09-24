package com.geohack.h2o2u.resources;

import com.codahale.metrics.annotation.Timed;
import com.geohack.h2o2u.model.WaterStatus;
import java.util.UUID;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("0.1/water")
@Produces(MediaType.APPLICATION_JSON)
public class WaterResource_0_1 {

    @GET
    @Timed
    public WaterStatus water() {
        return new WaterStatus();
    }

}
