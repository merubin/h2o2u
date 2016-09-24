package com.geohack.h2o2u.tasks;

import java.io.IOException;
import java.util.HashSet;
import java.util.concurrent.TimeUnit;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.knowm.sundial.annotations.SimpleTrigger;
import org.knowm.sundial.exceptions.JobInterruptException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SimpleTrigger(repeatInterval = 1, timeUnit = TimeUnit.MINUTES, isConcurrencyAllowed=true)
public class StatusChecker extends org.knowm.sundial.Job {
    private static final Logger logger = LoggerFactory.getLogger(StatusChecker.class);

    public StatusChecker() {
        keywords.add("water");
        keywords.add("boil");
        keywords.add("advisory");
        keywords.add("contaminated");
    }

    public static HashSet<String> keywords = new HashSet<String>();
    @Override
    public void doRun() throws JobInterruptException {
        System.out.println("Checking http://vienna.wusa9.com");
        try {
            Connection.Response response = Jsoup.connect("http://vienna.wusa9.com").execute();
            Document doc = Jsoup.parse(response.body());

            Elements elements = doc.body().select("a");

            for (Element element : elements) {
                String[] ele = element.ownText().split(" ");
                int count = 0;
                for (String e : ele) {
                    if(keywords.contains(e)) {
                        count++;
                    }
                }
                if(count > 2) {
                    notifySlack("There is a water quality problem in Vienna Va.");
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        logger.info("Its running");

    }

    public static void notifySlack(String text) {
        String url = "https://hooks.slac"+
                "k.com/servi" +
                "ces/T2CEK4RPW/B2FJ5FBPB/o7Mz"+
                "VCn6pRXBwlu1M0GNS4A9";

        HttpClient client = HttpClientBuilder.create().build();
        HttpPost post = new HttpPost(url);

        try {
            StringEntity se = new StringEntity("{\"text\": \""+text+"\"}" );
            post.setEntity(se);

            HttpResponse response = client.execute(post);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
