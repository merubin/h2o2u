package com.geohack.h2o2u.resources;

import com.geohack.h2o2u.view.IndexView;
import io.dropwizard.jersey.caching.CacheControl;
import io.dropwizard.views.View;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;


@Path("dash")
@Produces(MediaType.TEXT_HTML)
public class Dashboard {

}
